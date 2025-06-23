import { Bounds } from "pixi.js";
import { CollisionSide, getBoundsCollision } from "./collision";

import { describe, it, expect, vi } from "vitest";

// Mock the Game.getCanvas method for canvas collision tests
vi.mock("../../app/Game", () => {
  return {
    __esModule: true,
    default: {
      getCanvas: vi.fn(),
    },
  };
});

describe("getBoundsCollision", () => {
  const makeBounds = (x: number, y: number, width: number, height: number) =>
    new Bounds(x, y, x + width, y + height);

  it("returns null when there is no overlap", () => {
    const a = makeBounds(0, 0, 10, 10);
    const b = makeBounds(20, 20, 10, 10);
    expect(getBoundsCollision(a, b)).toBeNull();
  });

  it("detects LEFT collision", () => {
    const a = makeBounds(5, 5, 10, 10);
    const b = makeBounds(10, 5, 10, 10);
    expect(getBoundsCollision(a, b)).toBe(CollisionSide.LEFT);
  });

  it("detects RIGHT collision", () => {
    const a = makeBounds(15, 5, 10, 10);
    const b = makeBounds(5, 5, 10, 10);
    expect(getBoundsCollision(a, b)).toBe(CollisionSide.RIGHT);
  });

  it("detects TOP collision", () => {
    const a = makeBounds(5, 5, 10, 10);
    const b = makeBounds(5, 10, 10, 10);
    expect(getBoundsCollision(a, b)).toBe(CollisionSide.TOP);
  });

  it("detects BOTTOM collision", () => {
    const a = makeBounds(5, 15, 10, 10);
    const b = makeBounds(5, 5, 10, 10);
    expect(getBoundsCollision(a, b)).toBe(CollisionSide.BOTTOM);
  });

  it("returns the side with the smallest overlap", () => {
    // Overlap more on Y than X, should return LEFT
    const a = makeBounds(9, 5, 10, 10);
    const b = makeBounds(10, 5, 10, 10);
    expect(getBoundsCollision(a, b)).toBe(CollisionSide.LEFT);
  });
});
