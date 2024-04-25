import React from "react";
import Docker from "./docker";
import Kubernetes from "./kubernetes";
import Ansible from "./ansible";
import Nodejs from "./nodejs";
import Reactjs from "./reactjs";
import Mongodb from "./mongodb";
import Tailwindcss from "./tailwindcss";
import Terraform from "./terraform";
import Jenkins from "./jenkins";
import Nginx from "./nginx";
import Git from "./git";

export default function Technologies() {
  return (
    <div className="flex gap-6">
      <Docker />
      <Kubernetes />
      <Ansible />
      <Nodejs />
      <Reactjs />
      <Mongodb />
      <Tailwindcss />
      <Terraform />
      <Jenkins />
      <Nginx />
      <Git />
    </div>
  );
}
