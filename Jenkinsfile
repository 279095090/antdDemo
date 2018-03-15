pipeline {
  agent any
  stages {
    stage('installpgk') {
      steps {
        sh 'npm config set registry http://registry.npm.taobao.org/'
        sh 'cd ./prodemo && npm install'
      }
    }
    stage('test') {
      steps {
        sh 'cd ./prodemo && npm test'
      }
    }
  }
}