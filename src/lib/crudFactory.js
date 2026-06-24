import { NextResponse } from 'next/server';
import { store } from './db';
import { getAuthUser } from './authMiddleware';

export function createCrudRoute(collectionName, publicGet = true) {
  return {
    async GET(request) {
      try {
        if (!publicGet) {
          const user = await getAuthUser(request);
          if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const data = await store.all(collectionName);
        return NextResponse.json(data);
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    },
    async POST(request) {
      try {
        const user = await getAuthUser(request);
        if (!user || (user.role !== 'owner' && user.role !== 'staff')) {
          return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        const body = await request.json();
        const doc = await store.insert(collectionName, body);
        return NextResponse.json(doc);
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    }
  };
}

export function createCrudIdRoute(collectionName) {
  return {
    async GET(request, { params }) {
      try {
        const id = (await params).id;
        const doc = await store.get(collectionName, id);
        if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        return NextResponse.json(doc);
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    },
    async PUT(request, { params }) {
      try {
        const user = await getAuthUser(request);
        if (!user || (user.role !== 'owner' && user.role !== 'staff')) {
          return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        const id = (await params).id;
        const body = await request.json();
        const doc = await store.update(collectionName, id, body);
        return NextResponse.json(doc);
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    },
    async DELETE(request, { params }) {
      try {
        const user = await getAuthUser(request);
        if (!user || (user.role !== 'owner' && user.role !== 'staff')) {
          return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        const id = (await params).id;
        const ok = await store.remove(collectionName, id);
        return NextResponse.json({ ok });
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    }
  };
}
