export interface UseDynamicScriptTagOptions {
  id: string
  url: string
  callback?: () => void
}

const injectScriptDynamically = () => {
  var scripts: any = {}
  return (options: UseDynamicScriptTagOptions): void => {
    const { id, url, callback } = options
    const existingScript = document.getElementById(`${id}`)
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = `${url}`
      script.id = `${id}`
      script.defer = true
      script.async = true
      document.body.appendChild(script)
      script.onload = () => {
        scripts[id].isLoading = false
        scripts[id].callbacks.forEach((cb: () => void) => {
          cb && cb()
        })
        scripts[id].callbacks = []
      }
      script.onerror = () => {
        scripts[id].isLoading = false
        scripts[id].callbacks.forEach((cb: (error: any) => void) => {
          cb && cb(true)
        })
        scripts[id].callbacks = []
      }
      scripts[id] = scripts[id] || { isLoading: true, callbacks: [callback] }
    }
    if (existingScript && callback && scripts[id]) {
      scripts[id].isLoading ? scripts[id].callbacks.push(callback) : callback()
    }
  }
}

export const useDynamicScriptTag = injectScriptDynamically()
