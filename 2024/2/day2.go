package day2

import (
  "bufio"
  "fmt"
  "io"
  "strings"
  "strconv"
)

func readInput(reader io.Reader) ([][]int, error) {
	scanner := bufio.NewScanner(reader)
	lines := [][]int{}
	for scanner.Scan() {
		line := scanner.Text()

		parts := strings.Split(line, " ")

		var numbers []int
		for _, part := range parts {
		  num, err := strconv.Atoi(part)
		  if  err != nil {
		    return lines, fmt.Errorf("Error scanning numbers: %v\n", err)
      }
      numbers = append(numbers, num)
		}

    lines = append(lines, numbers)
	}

	// Check for errors during scanning
	if err := scanner.Err(); err != nil {
		return lines, fmt.Errorf("error reading lines: %w", err)
	}
	return lines, nil
}

func isSafe(nums []int) bool {
  isAscending := true
  isDescending := true

  for i, num := range nums[1:] {
    delta := num - nums[i]

    if delta <= 0 || delta > 3 {
      isAscending = false
    }

    if delta >= 0 || delta < -3 {
      isDescending = false
    }
  }

  return isAscending || isDescending
}

func Part1(reader io.Reader, writer io.Writer) error {
  lines, err := readInput(reader)
  if err != nil {
    return err
  }

  total := 0
  for _, line := range lines {
    if isSafe(line) {
      total += 1
    }
  }

  fmt.Fprintf(writer, "%d\n", total)

  return nil
}

func Part2(reader io.Reader, writer io.Writer) error {
  lines, err := readInput(reader)
  if err != nil {
    return err
  }

  total := 0
  for _, line := range lines {
    if isSafe(line) {
      total += 1
      continue
    }

    for i := 0; i < len(line); i += 1 {
      subLine := append(append([]int{}, line[:i]...), line[i+1:]...)
      if isSafe(subLine) {
        total += 1
        break
      }
    }
  }

  fmt.Fprintf(writer, "%d\n", total)

  return nil
}
