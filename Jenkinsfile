pipeline {
  agent any

  tools {Tool Config name
    nodejs 'Node 18' 
  }

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
        echo '✅ Build Complete!'
      }
    }
  }
}
