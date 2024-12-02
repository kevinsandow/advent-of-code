package main

import (
	"fmt"
	"io"
)

func Copy(reader io.Reader, writer io.Writer) error {
	_, err := io.Copy(writer, reader)
	if err != nil {
		return fmt.Errorf("error copying data: %w", err)
	}
	return nil
}
