const { sallary, workplace, coworkers } = msg

if (
  sallary < 0 ||
  sallary > 10 ||
  workplace < 0 ||
  workplace > 10 ||
  coworkers < 0 ||
  workplace > 10
) {
  return { payload: 'Invalid selection' }
} else {
  const sum = sallary + workplace + coworkers / 3
  const overall = Math.round(sum / 3)
  const percentage = (100 * overall) / 30
  return { payload: { overall, percentage } }
}
