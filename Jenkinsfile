pipeline {
   agent { 
      docker { 
         image 'node:12.16.2'
            args '-p 3000:3000'
      } 
   }

   parameters {
       choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'webkit'], description: 'Select the browser to run tests')
   }

   stages {
      stage('Run Playwright test') {
         steps {
            withCredentials([usernamePassword(credentialsId: '62e8ac3e-5b36-42c3-badd-577d4bfa0746', usernameVariable: 'MAGENTO_PLAYWRIGHT', passwordVariable: 'ADMIN_MAGENTO')]) 
         }
      }
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
}