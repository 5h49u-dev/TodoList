@Library("Shared") _
pipeline{
    agent {label "demoagent"}
    stages{
        stage("Hello"){
            steps{
                script{
                    hello()
                }
            }
        }
        stage("Code"){
            steps{
                script{
                clone("https://github.com/5h49u-dev/TodoList.git","main")
                }
            }
        }
        stage("Build"){
            steps{
                script{
                docker_build( "todo-app","latest","shanuchaurasiya")
                }
            }
        }
        stage("Push to DockerHub"){
            steps{
                script{
                    docker_push("todo-app","latest","shanuchaurasiya")
                }
            }
        }
        stage("Deploy"){
            steps{
                echo "Deploying the code"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
