const toPrint = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']  //Added spinner strings to array
for (let i = 0; i < toPrint.length; i ++) {                                                                   //Iterate through array
  setTimeout(() => {                                                                                          //setTimeout triggered     
  process.stdout.write(toPrint[i]);                                                                           //Print element i from array
  }, 250 * i);                                                                                                //Control delays by multiplying by i as it increments
};
