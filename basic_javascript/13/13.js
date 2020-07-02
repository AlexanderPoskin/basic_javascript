function areYouPlayingBanjo(name) {
  if (name.includes("R") || name.includes("r")) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Rokky"));
