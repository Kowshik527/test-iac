# main.tf
resource "aws_instance" "example" {
  ami           = ""ami.123""
  instance_type = ""m4.large""
  tags = {
    Name = ""ins""
  }
}

variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
