package main

import (
	"fmt"
	"os"
	day1 "github.com/kevinsandow/advent-of-code/2024/v2/1"
	day2 "github.com/kevinsandow/advent-of-code/2024/v2/2"
)

func main() {
  args := os.Args
  if len(args) < 2 {
    fmt.Fprintf(os.Stderr, "Missing arguments: day{n}part{n}\n")
    os.Exit(3)
  }

  r := os.Stdin
  if len(args) > 2 {
    f, err := os.Open(args[2])
    if err != nil {
      fmt.Fprintf(os.Stderr, "Error opening file: %v\n", err)
      os.Exit(4)
    }
    defer f.Close()
    r = f
  }

  w := os.Stdout

  var err error
  switch args[1] {
  case "day1part1":
    err = day1.Part1(r, w)
  case "day1part2":
    err = day1.Part2(r, w)
  case "day2part1":
    err = day2.Part1(r, w)
  case "day2part2":
    err = day2.Part2(r, w)
  default:
    fmt.Fprintf(os.Stderr, "Not implemented: %s.\n", args[1])
    os.Exit(2)
  }

	if err != nil {
		fmt.Fprintf(os.Stderr, "An error occurred: %v\n", err)
		os.Exit(1)
	}
}
