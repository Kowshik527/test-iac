# main.tf
resource "aws_instance" "example" {
  ami           = ""ami-12345678""
  instance_type = ""t2.micro""
  tags = {
    Name = ""my-instance""
  }
}

variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
