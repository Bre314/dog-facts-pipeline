pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }


stage('Clean Workspace') {
  steps {
    deleteDir()
  }
}
  stages {
    stage('Install') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Test') {
      steps {
        dir('backend') {
          sh 'npm test'
        }
      }
    }

    stage('Build Docker') {
      steps {
        sh 'docker build -t dog-facts-app .'
      }
    }

    stage('Postman Tests') {
      steps {
        sh 'newman run postman/DogFacts.postman_collection.json'
      }
    }
  }
}
