import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { GenreResponseProps } from "../App";

interface SideBarProps {
  genres:  GenreResponseProps[],
  onChangeSelectedGenre:(id: number) => void;
}

export function SideBar(props: SideBarProps) {
  console.log(props)
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);

    props.onChangeSelectedGenre(selectedGenreId);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}