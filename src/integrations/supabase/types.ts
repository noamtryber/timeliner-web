export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      media_content: {
        Row: {
          created_at: string | null
          id: string
          media_key: string
          media_type: string
          media_url: string
          section_id: string | null
          section_type: Database["public"]["Enums"]["section_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          media_key: string
          media_type: string
          media_url: string
          section_id?: string | null
          section_type: Database["public"]["Enums"]["section_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          media_key?: string
          media_type?: string
          media_url?: string
          section_id?: string | null
          section_type?: Database["public"]["Enums"]["section_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      page_content: {
        Row: {
          content_key: string
          content_value: string
          created_at: string | null
          id: string
          section_id: string | null
          section_type: Database["public"]["Enums"]["section_type"]
          updated_at: string | null
        }
        Insert: {
          content_key: string
          content_value: string
          created_at?: string | null
          id?: string
          section_id?: string | null
          section_type: Database["public"]["Enums"]["section_type"]
          updated_at?: string | null
        }
        Update: {
          content_key?: string
          content_value?: string
          created_at?: string | null
          id?: string
          section_id?: string | null
          section_type?: Database["public"]["Enums"]["section_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      plan_features: {
        Row: {
          created_at: string
          feature_key: string
          feature_tooltip: string | null
          feature_value: string
          id: number
          language: string
          plan_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          feature_key: string
          feature_tooltip?: string | null
          feature_value: string
          id?: number
          language?: string
          plan_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          feature_key?: string
          feature_tooltip?: string | null
          feature_value?: string
          id?: number
          language?: string
          plan_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      pricing_plans: {
        Row: {
          base_members: number | null
          base_price: number | null
          base_storage: number | null
          created_at: string
          id: number
          language: string
          max_client_guests: number | null
          plan_id: string
          subtitle: string
          title: string
          updated_at: string
        }
        Insert: {
          base_members?: number | null
          base_price?: number | null
          base_storage?: number | null
          created_at?: string
          id?: number
          language?: string
          max_client_guests?: number | null
          plan_id: string
          subtitle: string
          title: string
          updated_at?: string
        }
        Update: {
          base_members?: number | null
          base_price?: number | null
          base_storage?: number | null
          created_at?: string
          id?: number
          language?: string
          max_client_guests?: number | null
          plan_id?: string
          subtitle?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      pricing_rules: {
        Row: {
          created_at: string
          id: number
          max_units: number
          min_units: number
          plan_id: string
          rule_type: string
          unit_price: number
          unit_size: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          max_units: number
          min_units: number
          plan_id: string
          rule_type: string
          unit_price: number
          unit_size: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          max_units?: number
          min_units?: number
          plan_id?: string
          rule_type?: string
          unit_price?: number
          unit_size?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      translations: {
        Row: {
          content_key: string
          content_value: string
          created_at: string | null
          id: string
          language: Database["public"]["Enums"]["supported_language"]
          section_id: string | null
          section_type: string
          updated_at: string | null
        }
        Insert: {
          content_key: string
          content_value: string
          created_at?: string | null
          id?: string
          language: Database["public"]["Enums"]["supported_language"]
          section_id?: string | null
          section_type: string
          updated_at?: string | null
        }
        Update: {
          content_key?: string
          content_value?: string
          created_at?: string | null
          id?: string
          language?: Database["public"]["Enums"]["supported_language"]
          section_id?: string | null
          section_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      section_type:
        | "hero"
        | "feature"
        | "benefit"
        | "testimonial"
        | "pricing"
        | "faq"
        | "frustrations"
        | "footer"
      supported_language: "en" | "es" | "pt" | "zh" | "ru" | "ar" | "he"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
