type dataType = {
    id: string; // unique identifier in list
    title: string;  //text I was to show in list
  }

  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ]

  // when exporting more than one item, dont use default
  // instead list them in {}
  export { DATA, dataType };
