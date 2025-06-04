pipeline {
    agent any

    tools{nodejs "node"}

    stages {
        stage('Cypress parallel test suite') {
            parallel {
                stage('Slave node1') {
                    agent {
                        label "remote_node_1"
                    }
                    steps {
                        git url: 'https://github.com/PurgeTroy/webdriveruniversity-e2e-tests.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run dashboard'
                    }
                }
                stage('Slave node2') {
                    agent {
                        label "remote_node_2"
                    }
                    steps {
                        git url: 'https://github.com/PurgeTroy/webdriveruniversity-e2e-tests.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run dashboard'
                    }
                }
            }
        }
        
    }
}