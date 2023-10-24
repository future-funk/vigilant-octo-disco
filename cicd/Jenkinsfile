if (env.JOB_NAME.contains('Trunk') || env.JOB_NAME.contains('Master')) {    
    def status = build job: env.JOB_NAME.substring(0, env.JOB_NAME.lastIndexOf('/', env.JOB_NAME.lastIndexOf('/') - 1)) + '/Pipelines/Build', 
                       parameters: [[$class: 'StringParameterValue', name: 'BUILD_PATH', value: env.JOB_NAME],
                                    [$class: 'StringParameterValue', name: 'JDK_VERSION', value: env.NOT_APPLICABLE],
                                    [$class: 'StringParameterValue', name: 'VERSION', value: '8.10']],
                       propagate: false

    currentBuild.result = status.result                    
} else if (env.JOB_NAME.contains('Branches')) {
    properties([
        parameters([
            string(name: 'MODULES', defaultValue: env.NOT_APPLICABLE),
            string(name: 'DEPLOYMENT_STEPS', defaultValue: env.NOT_APPLICABLE)
        ])
    ])

    def status
    try {
        println "MODULES = $MODULES"
        println "DEPLOYMENT_STEPS = $DEPLOYMENT_STEPS"
        
        status = build job: env.JOB_NAME.substring(0, env.JOB_NAME.lastIndexOf('/', env.JOB_NAME.lastIndexOf('/') - 1)) + '/Pipelines/Release', 
                       parameters: [[$class: 'StringParameterValue', name: 'BUILD_PATH', value: env.JOB_NAME],
                                    [$class: 'StringParameterValue', name: 'JDK_VERSION', value: env.NOT_APPLICABLE],
                                    [$class: 'StringParameterValue', name: 'MODULES', value: env.MODULES == null ? '' : env.MODULES],
                                    [$class: 'StringParameterValue', name: 'DEPLOYMENT_STEPS', value: env.DEPLOYMENT_STEPS == null ? '' : env.DEPLOYMENT_STEPS]],
                       propagate: false
    } catch (any) {
        status = build job: env.JOB_NAME.substring(0, env.JOB_NAME.lastIndexOf('/', env.JOB_NAME.lastIndexOf('/') - 1)) + '/Pipelines/Release', 
                       parameters: [[$class: 'StringParameterValue', name: 'BUILD_PATH', value: env.JOB_NAME],
                                    [$class: 'StringParameterValue', name: 'JDK_VERSION', value: env.NOT_APPLICABLE]],
                       propagate: false   
    }
                                    
    currentBuild.result = status.result
}