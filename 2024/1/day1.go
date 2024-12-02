package day1

import (
  "bufio"
  "fmt"
  "io"
  "sort"
)

func readInput(reader io.Reader) ([]int, []int, error) {
	scanner := bufio.NewScanner(reader)
	leftResult := []int{}
	rightResult := []int{}
	for scanner.Scan() {
		line := scanner.Text()

    var left, right int
    _, err := fmt.Sscanf(line, "%d %d", &left, &right)
    if err != nil {
      return leftResult, rightResult, fmt.Errorf("Error scanning numbers: %v\n", err)
    }

		leftResult = append(leftResult, left)
		rightResult = append(rightResult, right)
	}

	// Check for errors during scanning
	if err := scanner.Err(); err != nil {
		return leftResult, rightResult, fmt.Errorf("error reading lines: %w", err)
	}
	return leftResult, rightResult, nil
}

func Part1(reader io.Reader, writer io.Writer) error {
  left, right, err := readInput(reader)
  if err != nil {
    return err
  }

  sort.Ints(left)
  sort.Ints(right)

  total := 0
  for i, l := range left {
    r := right[i]
    if r > l {
      total += r - l
      continue
    }

    total += l - r
  }

  fmt.Fprintf(writer, "%d\n", total)

  return nil
}

func Part2(reader io.Reader, writer io.Writer) error {
  left, right, err := readInput(reader)
    if err != nil {
      return err
    }

    counts := make(map[int]int)

    for _, r := range right {
      counts[r]++
    }

    similarity := 0
    for _, l := range left {
      similarity += l * counts[l]
    }

    fmt.Fprintf(writer, "%d\n", similarity)

    return nil
}
