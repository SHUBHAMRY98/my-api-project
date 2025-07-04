import React from "react";
import catering from "../../assets/images/icons/catering 1.png"
import wedding from "../../assets/images/icons/wedding-arch 1.png";
import cake from "../../assets/images/icons/birthday-cake 1.png"
import flower from "../../assets/images/icons/flower-shop 1.png"
import anniversary from "../../assets/images/icons/anniversary 1.png"
import ring from "../../assets/images/icons/diamond-ring 1.png";

export const services = [
  { title: "Wedding", icon: wedding, selected: true },
  { title: "Birthday", icon:cake },
  { title: "Anniversary", icon: anniversary },
  {title:"Engagement", icon:ring}
];

export const vendors = [
  { title: "Florists", icon: flower },
  { title: "Decorators", icon: ring},
  { title: "Caterers", icon: catering },
  {title:"band", icon: cake}
];

