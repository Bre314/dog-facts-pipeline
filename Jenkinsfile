pipeline {
  agent any

  options {
    skipDefaultCheckout(false) // ⬅️ ensures Jenkins checks out your code
  }

  stages {
    stage('Debug Workspace') {
      steps {
        echo '📁 Checking workspace before anything...'
        sh 'ls -al'
        sh 'ls -al backend || echo "❌ backend not found"'
        sh 'cat backend/package.json || echo "❌ package.json missing"'
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
