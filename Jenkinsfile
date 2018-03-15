pipeline {
  agent any
  stages {
    stage('installpgk') {
      steps {
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