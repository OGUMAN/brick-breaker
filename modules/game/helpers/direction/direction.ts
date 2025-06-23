export function calculateDirection(
  start: { x: number; y: number },
  targetX: number,
  targetY: number
): { dx: number; dy: number; angle: number } {
  const dx = targetX - start.x;
  const dy = targetY - start.y;
  const angle = Math.atan2(dy, dx); // Angle in radians
  return { dx, dy, angle };
}

export function calculateNextPosition(
  position: { x: number; y: number },
  direction: { dx: number; dy: number },
  speed: number
): { x: number; y: number } {
  const length = Math.sqrt(
    direction.dx * direction.dx + direction.dy * direction.dy
  );
  const normalizedDirection = {
    x: direction.dx / length,
    y: direction.dy / length,
  };

  return {
    x: position.x + normalizedDirection.x * speed,
    y: position.y + normalizedDirection.y * speed,
  };
}
