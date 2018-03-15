pipeline {
  agent none
  stages {
    stage('installpgk') {
      steps {
        sh 'npm install'
      }
    }
    stage('') {
      steps {
        sh 'npm test'
      }
    }
  }
}