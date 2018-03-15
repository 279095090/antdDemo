pipeline {
  agent {
    node {
      label 'node'
    }
    
  }
  stages {
    stage('installpgk') {
      steps {
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
}