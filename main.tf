# main.tf
resource "aws_instance" "example" {
  ami           = "${var.ami_id}"
  instance_type = "${var.instance_type}"
  tags = {
    Name = "${var.instance_name}"
  }
}

variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
