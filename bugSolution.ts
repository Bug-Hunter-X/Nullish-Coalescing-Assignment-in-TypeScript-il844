function printName(name: string | null): void {
  console.log((name ?? '').toUpperCase());
}

printName(null); // This will now work correctly.