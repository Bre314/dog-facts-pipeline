FROM jenkins/jenkins:lts

USER root

# Install Node.js and Docker
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs docker.io && \
    groupadd -g 20 docker || true && \
    usermod -aG docker jenkins

USER jenkins
