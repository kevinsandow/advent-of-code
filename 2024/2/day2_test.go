package day2

import (
  "bytes"
  "os"
  "testing"
)

func TestPart1(t *testing.T) {
  t.Run("SampleData", func(t *testing.T) {
    reader, err := os.Open("sample.txt")
    if err != nil {
      t.Fatalf("failed loading input: %v", err)
    }
    defer reader.Close()

    data, err := os.ReadFile("1.out.txt")
    if err != nil {
      t.Fatalf("failed loading expected data: %v", err)
    }

    expected := string(data)

    var writer bytes.Buffer
    err = Part1(reader, &writer)
    if err != nil {
      t.Fatalf("unexpected error: %v", err)
    }

    if writer.String() != expected {
      t.Errorf("expected %q, got %q", expected, writer.String())
    }
  })
}

func TestPart2(t *testing.T) {
  t.Run("SampleData", func(t *testing.T) {
    reader, err := os.Open("sample.txt")
    if err != nil {
      t.Fatalf("failed loading input: %v", err)
    }
    defer reader.Close()

    data, err := os.ReadFile("2.out.txt")
    if err != nil {
      t.Fatalf("failed loading expected data: %v", err)
    }

    expected := string(data)

    var writer bytes.Buffer
    err = Part2(reader, &writer)
    if err != nil {
      t.Fatalf("unexpected error: %v", err)
    }

    if writer.String() != expected {
      t.Errorf("expected %q, got %q", expected, writer.String())
    }
  })
}
