import { describe, it, expect } from "vitest";
import { calculateDirection, calculateNextPosition } from "./direction";

describe("calculateDirection", () => {
  it("calculates correct direction and angle (right)", () => {
    const result = calculateDirection({ x: 0, y: 0 }, 10, 0);
    expect(result.dx).toBe(10);
    expect(result.dy).toBe(0);
    expect(result.angle).toBeCloseTo(0);
  });

  it("calculates correct direction and angle (up)", () => {
    const result = calculateDirection({ x: 0, y: 0 }, 0, 10);
    expect(result.dx).toBe(0);
    expect(result.dy).toBe(10);
    expect(result.angle).toBeCloseTo(Math.PI / 2);
  });

  it("calculates correct direction and angle (diagonal)", () => {
    const result = calculateDirection({ x: 1, y: 1 }, 4, 5);
    expect(result.dx).toBe(3);
    expect(result.dy).toBe(4);
    expect(result.angle).toBeCloseTo(Math.atan2(4, 3));
  });
});

describe("calculateNextPosition", () => {
  it("moves correctly along x-axis", () => {
    const result = calculateNextPosition({ x: 0, y: 0 }, { dx: 1, dy: 0 }, 5);
    expect(result.x).toBeCloseTo(5);
    expect(result.y).toBeCloseTo(0);
  });

  it("moves correctly along y-axis", () => {
    const result = calculateNextPosition({ x: 0, y: 0 }, { dx: 0, dy: 1 }, 5);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(5);
  });

  it("moves correctly in diagonal direction", () => {
    const result = calculateNextPosition({ x: 1, y: 1 }, { dx: 3, dy: 4 }, 5);
    // normalized direction = (0.6, 0.8), so new position = (1 + 3, 1 + 4)
    expect(result.x).toBeCloseTo(1 + 0.6 * 5);
    expect(result.y).toBeCloseTo(1 + 0.8 * 5);
  });
});
