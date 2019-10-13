export default class Test {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  get Name(): string {
    return this.name
  }

  get Age(): number {
    return this.age
  }
}
