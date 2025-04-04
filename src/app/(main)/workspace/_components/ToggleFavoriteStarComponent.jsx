"use client";
import { patchWorkspaceFavoriteAction } from "@/action/workspaceAction";
import { StarIcon } from "lucide-react";
import React, { useState } from "react";

const ToggleFavoriteStarComponent = ({ workspaceId, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const handleToggleFavorite = () => {
    patchWorkspaceFavoriteAction(workspaceId, !favorite);
    setFavorite(!favorite);
  };
  return (
    <div onClick={handleToggleFavorite}>
      {favorite ? <StarIcon fill="black" /> : <StarIcon />}
    </div>
  );
};

export default ToggleFavoriteStarComponent;
