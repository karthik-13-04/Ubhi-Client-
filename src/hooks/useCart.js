'use client';

import { useCallback, useMemo } from 'react';
import useStore from './useStore';
import { ubhiShipping, ubhiFreeShipThreshold, ubhiShipFlatRate } from '../lib/utils';

/**
 * React hook for managing the shopping cart.
 *
 * Usage:
 *   const { items, addItem, removeItem, updateQty, clearCart, subtotal, shipping, total, totalQty } = useCart();
 */
export default function useCart() {
  const [items, setItems] = useStore('cart', []);

  const addItem = useCallback((name, price, art) => {
    setItems((current) => {
      const list = Array.isArray(current) ? [...current] : [];
      const existing = list.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        list.push({
          name,
          price: parseInt(price, 10),
          quantity: 1,
          art: art || `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="var(--aurora-gold)" stroke-width="0.5"/><circle cx="50" cy="50" r="15" fill="var(--aurora-gold)"/></svg>`
        });
      }
      return list;
    });
  }, [setItems]);

  const removeItem = useCallback((name) => {
    setItems((current) => {
      return (Array.isArray(current) ? current : []).filter(item => item.name !== name);
    });
  }, [setItems]);

  const updateQty = useCallback((name, newQty) => {
    if (newQty <= 0) {
      removeItem(name);
      return;
    }
    setItems((current) => {
      const list = Array.isArray(current) ? [...current] : [];
      const item = list.find(i => i.name === name);
      if (item) item.quantity = newQty;
      return list;
    });
  }, [setItems, removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, [setItems]);

  const safeItems = Array.isArray(items) ? items : [];

  const subtotal = useMemo(() => {
    return safeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [safeItems]);

  const totalQty = useMemo(() => {
    return safeItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [safeItems]);

  const shipping = useMemo(() => ubhiShipping(subtotal), [subtotal]);
  const total = subtotal + shipping;

  return {
    items: safeItems,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    subtotal,
    shipping,
    total,
    totalQty,
    freeShipThreshold: ubhiFreeShipThreshold(),
    shipFlatRate: ubhiShipFlatRate(),
  };
}
