pipeline {
   agent any

   parameters {
      choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'webkit'], description: 'Select the browser to run tests')
      choice(name: 'JS_FILE', choices: ['create_Account.js', 'Sign_In.js'], description: 'Select JS test file')
   }

   stages {
      stage('Run Playwright test') {
         steps {
            withCredentials([usernamePassword(credentialsId: '62e8ac3e-5b36-42c3-badd-577d4bfa0746', usernameVariable: 'MAGENTO_PLAYWRIGHT', passwordVariable: 'ADMIN_MAGENTO')]) {
               echo "accessing repository"
            }
         }
      }
      stage('Install dependencies') {
         steps {
            bat 'npm ci'
            bat 'npx playwright install'
         }
      }
      stage('e2e-tests') {
         steps {
            bat "npx playwright test --project=${params.BROWSER} --reporter=list tests/${params.JS_FILE}"
         }
      }
   }
}