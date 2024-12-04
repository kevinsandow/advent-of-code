package day3

import (
	"bufio"
	"fmt"
	"io"
	"regexp"
	"strconv"
	"strings"
)

func readInput(reader io.Reader) (string, error) {
	scanner := bufio.NewScanner(reader)
	code := ""
	for scanner.Scan() {
		code = code + scanner.Text()
	}

	// Check for errors during scanning
	if err := scanner.Err(); err != nil {
		return code, fmt.Errorf("error reading lines: %w", err)
	}
	return code, nil
}

func mul(match []string) (int, error) {
	a, err := strconv.Atoi(match[1])
	if err != nil {
		return 0, fmt.Errorf("Error scanning first number: %v\n", err)
	}

	b, err := strconv.Atoi(match[2])
	if err != nil {
		return 0, fmt.Errorf("Error scanning second number: %v\n", err)
	}

	return a * b, nil
}

func Part1(reader io.Reader, writer io.Writer) error {
	code, err := readInput(reader)
	if err != nil {
		return err
	}

	pattern := `mul\((\d+),(\d+)\)`
	re := regexp.MustCompile(pattern)

	total := 0

	for _, match := range re.FindAllStringSubmatch(code, -1) {
		result, err := mul(match)
		if err != nil {
			return err
		}
		total += result
	}

	fmt.Fprintf(writer, "%d\n", total)

	return nil
}

func Part2(reader io.Reader, writer io.Writer) error {
	code, err := readInput(reader)
	if err != nil {
		return err
	}

	pattern := `^mul\((\d+),(\d+)\)`
	re := regexp.MustCompile(pattern)

	total := 0
	mulEnabled := true

	for i := 0; i < len(code); i += 1 {
		tail := code[i:]

		if strings.HasPrefix(tail, "do()") {
			mulEnabled = true
			continue
		}

		if strings.HasPrefix(tail, "don't") {
			mulEnabled = false
			continue
		}

		match := re.FindStringSubmatch(tail)
		if len(match) == 0 || !mulEnabled {
			continue
		}

		result, err := mul(match)
		if err != nil {
			return err
		}
		total += result
	}

	fmt.Fprintf(writer, "%d\n", total)

	return nil
}
