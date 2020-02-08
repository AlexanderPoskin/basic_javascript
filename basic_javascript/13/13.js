function areYouPlayingBanjo(name) {
  if (name.includes("R", 0) || name.includes("r", 0)) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Rokky"));
