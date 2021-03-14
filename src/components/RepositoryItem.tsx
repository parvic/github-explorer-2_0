import React from "react";

import "../styles/components/RepositoryItem.scss"

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    link: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.link}>{props.repository.name}</a>
      </li>
    </>
  )
}