pipeline {
  agent any

  stages {
    stage('Install Backend Dependencies') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Unit Tests') {
      steps {
        dir('backend') {
          sh 'npm test'
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -f Dockerfile.backend -t dog-facts-backend .'
      }
    }

    stage('Success') {
      steps {
        echo '🚀 Pipeline Complete: Dog facts microservice built and tested!'
      }
    }
  }
}
