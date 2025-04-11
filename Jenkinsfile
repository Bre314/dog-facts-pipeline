pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
        sh 'echo 📁 Top level files:'
        sh 'ls -al'
        sh 'echo 📁 Backend files:'
        sh 'ls -al backend'
      }
    }

    stage('Install & Test') {
      steps {
        script {
          docker.image('node:18').inside {
            sh 'npm install --prefix backend'
            sh 'npm test --prefix backend'
          }
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
