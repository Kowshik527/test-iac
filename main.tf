# main.tf
resource "aws_instance" "example" {
  ami           = ""ami-098765""
  instance_type = ""m3.large""
  tags = {
    Name = ""testIinstance""
  }
}

variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
