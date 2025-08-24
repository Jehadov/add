function addBalance(balance, new_amount_to_add) {
  const b = Number(balance) || 0;
  const add = Number(new_amount_to_add) || 0;
  return b + add;
}

function subtractBalance(balance, new_amount_to_subtract) {
  const b = Number(balance) || 0;
  const sub = Number(new_amount_to_subtract) || 0;
  return b - sub;
}

