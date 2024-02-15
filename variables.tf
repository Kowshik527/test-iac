variable "ami_id" {
  type = string
  description = "The ID of the AMI to use for the instance"
  default = "ami.1234555"
}

variable "instance_type" {
  type = string
  description = "The type of instance to launch"
  defualt = "t3,smallllllllll"
}

variable "instance_name" {
  type = string
  description = "The name of the instance"
  default = "myinnss"
}