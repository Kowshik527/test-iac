<<<<<<< HEAD
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = var.ami_id
  instance_type = var.instance_type
  tags = {
    Name = var.instance_name
  }
}
=======
# main.tf
resource "aws_instance" "example" {
  ami           = ""ami.1234""
  instance_type = ""t3.samll""
  tags = {
    Name = ""myIns""
  }
}

variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
>>>>>>> 14ff79c5d38c28d82e30527e3fddb4b8f35dec11
