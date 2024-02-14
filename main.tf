# main.tf
resource "aws_instance" "example" {
  ami           = ""ami.12345""
  instance_type = ""m3.4xlarge""
  tags = {
    Name = ""TestInstance""
  }
}

variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
