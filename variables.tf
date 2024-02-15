variable "ami_id" {
  type = string
  description = "The ID of the AMI to use for the instance"
  default = "${ami_id}"
}

variable "instance_type" {
  type = string
  description = "The type of instance to launch"
  defualt = "${instance_type}"
}

variable "instance_name" {
  type = string
  description = "The name of the instance"
  default = "${instance_name}"
}
