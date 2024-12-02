package main

import (
	"bytes"
	"errors"
	"io"
	"strings"
	"testing"
)

func TestCopy(t *testing.T) {
	t.Run("Successful", func(t *testing.T) {
		input := "Hello World!"
		reader := strings.NewReader(input)
		var writer bytes.Buffer

		err := Copy(reader, &writer)
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}

		if writer.String() != input {
			t.Errorf("expected %q, got %q", input, writer.String())
		}
	})

	t.Run("EmptyInput", func(t *testing.T) {
		reader := strings.NewReader("")
		var writer bytes.Buffer

		err := Copy(reader, &writer)
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}

		if writer.Len() != 0 {
			t.Errorf("expected empty writer, got %q", writer.String())
		}
	})

	t.Run("ReaderError", func(t *testing.T) {
		faultyReader := &FaultyReader{}
		var writer bytes.Buffer

		err := Copy(faultyReader, &writer)
		if err == nil {
			t.Fatal("expected error, got nil")
		}

		if !errors.Is(err, io.ErrUnexpectedEOF) {
			t.Errorf("expected io.ErrUnexpectedEOF, got %v", err)
		}
	})
}

// FaultyReader simulates a reader that always fails.
type FaultyReader struct{}

func (f *FaultyReader) Read(p []byte) (int, error) {
	return 0, io.ErrUnexpectedEOF
}
