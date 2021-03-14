import React, { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";
import "../styles/components/RepositoryList.scss";

interface Repository {
  name: string;
  description: string;
  link: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section>
      <h1>Title</h1>
      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository} />
          })
        }
      </ul>
    </section>
  );
}