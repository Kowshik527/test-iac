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
