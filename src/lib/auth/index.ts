import { createClient } from '@/lib/server';
import { redirect } from 'next/navigation';
import { type User } from '@supabase/supabase-js';
import { type Database } from '@/lib/database.types';

export type Profile = Database['public']['Tables']['profiles']['Row'];

/**
 * Retrieves the current authenticated user session.
 */
export async function getUser(): Promise<User | null> {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    return user;
}

/**
 * Retrieves the profile data for the current authenticated user.
 */
export async function getProfile(): Promise<Profile | null> {
    const user = await getUser();
    if (!user) return null;

    const supabase = await createClient();
    const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error || !profile) return null;
    return profile as Profile;
}

/**
 * Requires an authenticated session, redirecting to login if not found.
 */
export async function requireUser() {
    const user = await getUser();
    if (!user) {
        redirect('/login');
    }
    return user;
}

/**
 * Requires an admin role, redirecting to home if the user is not an admin.
 */
export async function requireAdmin() {
    const profile = await getProfile();
    if (!profile?.is_admin && profile?.role !== 'admin') {
        redirect('/');
    }
    return profile;
}

/**
 * Requires staff (admin or collaborator) role.
 */
export async function requireStaff() {
    const profile = await getProfile();
    if (!profile?.is_admin && profile?.role !== 'admin' && profile?.role !== 'collaborator') {
        redirect('/');
    }
    return profile;
}

