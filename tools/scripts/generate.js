const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const nfzf = require('node-fzf')
const { glob } = require('glob')
const { readNxJson } = require('@nrwl/devkit')

const isLibrary = (directory) =>
  fs.existsSync(path.join(directory, 'project.json'))

const formatScope = (scope) =>
  scope
    .split(/(bpd-web-ui\/libs\/)/)
    .slice(2)
    .join('')

const getAllLibraryScopes = () => {
  const root = path.join(__dirname, '..', '..')
  const libsPath = path.join(root, 'libs', '*', '**').replaceAll(path.sep, '/')

  const directories = glob.sync(libsPath, {
    ignore: ['**/*.*(json|md|ts)', '**/src/**'],
  })

  return directories
    .reduce(
      (scopes, directory) => [
        ...scopes,
        ...(isLibrary(directory) ? [] : [directory]),
      ],
      []
    )
    .map(formatScope)
}

const queryLibraryScope = async (options) => {
  const result = await nfzf(options)
  const query = result.query || result.selected?.value

  if (!query) throw Error('Please select a file')

  return query
}

;(async function () {
  const scope = await queryLibraryScope({ list: getAllLibraryScopes() })

  const [type, name, ...args] = process.argv.slice(2)

  if (!type) throw Error('Type parameter is required')
  if (!name) throw Error('Name parameter is required')

  exec(
    `nx workspace-generator ${type} ${name} ${scope} ${args.join(' ')}`,
    (error, stdout) => {
      if (error) return
      console.log(stdout)
    }
  )
})()
