export default function lifeScale(data) {
  const { health } = data;
  if (health > 50) {
    return 'healthy';
  }
  if (health <= 50 && health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
